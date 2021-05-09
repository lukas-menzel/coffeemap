from app import app, db, guard, cors
import uuid
import flask
import os
from flask import request, jsonify
import flask_sqlalchemy
import flask_praetorian
import flask_cors
from flask_migrate import Migrate, MigrateCommand
from models import User, Place
import decimal
import flask.json


class MyJSONEncoder(flask.json.JSONEncoder):

    def default(self, obj):
        if isinstance(obj, decimal.Decimal):
            # Convert decimal instances to strings.
            return str(obj)
        return super(MyJSONEncoder, self).default(obj)


@app.route('/')
def index():
    return app.send_static_file('index.html')


@app.errorhandler(404)
def not_found(e):
    return app.send_static_file('index.html')


@app.route('/favicon.ico', methods=["GET"])
def favicon():
    return app.send_static_file('favicon.ico')


@app.route('/api/auth/user', methods=['POST'])
def create_user():

    data = request.get_json()

    hashed_password = guard.hash_password(data['password'])

    new_user = User(public_id=str(uuid.uuid4()), first_name=data['first_name'], last_name=data['last_name'], email=data['email'], password=hashed_password,
                    data_privacy_accepted=data['data_privacy_accepted'], email_marketing_accepted=data['email_marketing_accepted'], roles=data['roles'])
    db.session.add(new_user)
    db.session.commit()

    return jsonify({'message': 'New user created!'})


@app.route('/api/auth/login', methods=['POST'])
def login():
    """
    Logs a user in by parsing a POST request containing user credentials and
    issuing a JWT token.
    .. example::
       $ curl http://localhost:5000/api/login -X POST \
         -d '{"username":"Yasoob","password":"strongpassword"}'
    """
    req = flask.request.get_json(force=True)
    email = req.get('email', None)
    password = req.get('password', None)
    user = guard.authenticate(email, password)
    ret = {'access_token': guard.encode_jwt_token(user)}
    return ret, 200


@app.route('/api/auth/refresh', methods=['POST'])
def refresh():
    """
    Refreshes an existing JWT by creating a new one that is a copy of the old
    except that it has a refrehsed access expiration.
    .. example::
       $ curl http://localhost:5000/refresh -X GET \
         -H "Authorization: Bearer <your_token>"
    """
    print("refresh request")
    old_token = request.get_data()
    new_token = guard.refresh_jwt_token(old_token)
    ret = {'access_token': new_token}
    return ret, 200


@app.route('/api/auth/protected')
@flask_praetorian.auth_required
def protected():
    """
    A protected endpoint. The auth_required decorator will require a header
    containing a valid JWT
    .. example::
       $ curl http://localhost:5000/api/protected -X GET \
         -H "Authorization: Bearer <your_token>"
    """
    return {"message": f'protected endpoint (allowed user {flask_praetorian.current_user().username})'}


@app.route('/api/place', methods=['GET'])
def get_all_places():

    # SQL query: SELECT * FROM place
    places = Place.query.all()

    output = []

    for place in places:
        place_data = {}
        place_data['id'] = place.id
        place_data['name'] = place.name
        place_data['street_house_number'] = place.street_house_number
        place_data['postcode'] = place.postcode
        place_data['city'] = place.city
        place_data['phone_number'] = place.phone_number
        place_data['email_adress'] = place.email_adress
        place_data['website_url'] = place.website_url
        place_data['facebook_url'] = place.facebook_url
        place_data['instagram_url'] = place.instagram_url
        place_data['wifi_available'] = place.wifi_available
        place_data['toilet_available'] = place.toilet_available
        place_data['power_slots_available'] = place.power_slots_available
        place_data['alcohol_available'] = place.alcohol_available
        place_data['vegan_alternatives_available'] = place.vegan_alternatives_available
        place_data['laptops_allowed'] = place.laptops_allowed
        place_data['open_for_takeaway'] = place.open_for_takeaway
        place_data['open_for_delivery'] = place.open_for_delivery
        place_data['price_espresso'] = place.price_espresso
        place_data['price_filter_coffee'] = place.price_filter_coffee
        place_data['price_cappuccino'] = place.price_cappuccino
        place_data['wifi_network_name'] = place.wifi_network_name
        place_data['wifi_network_password'] = place.wifi_network_password
        # place_data['food_options'] = place.food_options
        # place_data['picture_urls'] = place.picture_urls

        output.append(place_data)

    return jsonify({'places': output})


@app.route('/api/place/<int:id>', methods=['GET'])
def get_single_place(id):
    # SQL query: SELECT * FROM place WHERE id = id LIMIT 1
    place = Place.query.filter_by(id=id).first()

    place_data = {}
    place_data['id'] = place.id
    place_data['name'] = place.name
    place_data['street_house_number'] = place.street_house_number
    place_data['postcode'] = place.postcode
    place_data['city'] = place.city
    place_data['phone_number'] = place.phone_number
    place_data['email_adress'] = place.email_adress
    place_data['website_url'] = place.website_url
    place_data['facebook_url'] = place.facebook_url
    place_data['instagram_url'] = place.instagram_url
    place_data['wifi_available'] = place.wifi_available
    place_data['toilet_available'] = place.toilet_available
    place_data['power_slots_available'] = place.power_slots_available
    place_data['alcohol_available'] = place.alcohol_available
    place_data['vegan_alternatives_available'] = place.vegan_alternatives_available
    place_data['laptops_allowed'] = place.laptops_allowed
    place_data['open_for_takeaway'] = place.open_for_takeaway
    place_data['open_for_delivery'] = place.open_for_delivery
    place_data['price_espresso'] = place.price_espresso
    place_data['price_filter_coffee'] = place.price_filter_coffee
    place_data['price_cappuccino'] = place.price_cappuccino
    place_data['wifi_network_name'] = place.wifi_network_name
    place_data['wifi_network_password'] = place.wifi_network_password
    place_data['food_options'] = place.food_options
    place_data['picture_urls'] = place.picture_urls

    return jsonify({'place': place_data})


@app.route('/api/place', methods=['POST'])
@flask_praetorian.auth_required
def create_place():
    data = request.get_json()

    new_place = Place(name=data['name'], street_house_number=data['street_house_number'], postcode=data['postcode'], city=data['city'], phone_number=data['phone_number'], email_adress=data['email_adress'], website_url=data['website_url'], facebook_url=data['facebook_url'], instagram_url=data['instagram_url'], wifi_available=data['wifi_available'], toilet_available=data['toilet_available'], power_slots_available=data['power_slots_available'],
                      alcohol_available=data['alcohol_available'], vegan_alternatives_available=data['vegan_alternatives_available'], laptops_allowed=data['laptops_allowed'], open_for_takeaway=data['open_for_takeaway'], open_for_delivery=data['open_for_delivery'], price_espresso=data['price_espresso'], price_filter_coffee=data['price_filter_coffee'], price_cappuccino=data['price_cappuccino'], wifi_network_name=data['wifi_network_name'], wifi_network_password=data['wifi_network_password'])
    # food_options=data['food_options'], picture_urls=data['picture_urls']
    db.session.add(new_place)
    db.session.commit()

    return jsonify({'message': 'New place created!'})


@app.route('/api/place/<id>', methods=['PUT'])
@flask_praetorian.auth_required
def update_place():
    # SQL query: SELECT * FROM place WHERE id = id LIMIT 1
    place = Place.query.filter_by(id=id).first()

    if not place:
        return jsonify({'message': 'No place found.'})
    db.session.commit()

    return jsonify({'message': 'The place has been updated.'})


@app.route('/api/place/<id>', methods=['DELETE'])
@flask_praetorian.auth_required
def delete_place():
    place = Place.query.filter_by(id=id).first()

    if not place:
        return jsonify({'message': 'No place found.'})

    db.session.delete(place)
    db.session.commit()

    return jsonify({'message': 'The user has been deleted.'})
