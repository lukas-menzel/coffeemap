from api import app
from api import db
from flask_migrate import Migrate, MigrateCommand


# A generic user model that might be used by an app powered by flask-praetorian
class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer(), primary_key=True)
    public_id = db.Column(db.String(50), unique=True)
    first_name = db.Column(db.String(length=50))
    last_name = db.Column(db.String(length=50))
    email = db.Column(db.String(length=255), unique=True, nullable=False)
    password = db.Column(db.String(length=255), nullable=False)
    profile_picture_url = db.Column(db.Text)
    data_privacy_accepted = db.Column(db.Boolean(), nullable=False)
    email_marketing_accepted = db.Column(db.Boolean(), nullable=False)
    roles = db.Column(db.Text)
    places = db.relationship('Place', secondary="placestoenduser")
    reviews = db.relationship('Review', backref='reviews', lazy=True)
    posts = db.relationship('Post', backref='posts', lazy=True)

    @property
    def rolenames(self):
        try:
            return self.roles.split(',')
        except Exception:
            return []

    @classmethod
    def lookup(cls, email):
        return cls.query.filter_by(email=email).one_or_none()

    @classmethod
    def identify(cls, id):
        return cls.query.get(id)

    @property
    def identity(self):
        return self.id


class PlacesToEndUser(db.Model):
    __tablename__ = 'placestoenduser'
    id = db.Column(db.Integer(), primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    place_id = db.Column(db.Integer, db.ForeignKey('places.id'))
    user = db.relationship('User', backref=db.backref(
        "placestoenduser", cascade="all, delete-orphan"))
    place = db.relationship('Place', backref=db.backref(
        "placestoenduser", cascade="all, delete-orphan"))


class Place(db.Model):
    __tablename__ = 'places'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(length=255), unique=True, nullable=False)
    street_house_number = db.Column(db.String(length=255), nullable=False)
    postcode = db.Column(db.String(length=5), nullable=False)
    city = db.Column(db.String(length=255), nullable=False)
    phone_number = db.Column(db.String(length=20))
    email_adress = db.Column(db.String(length=255))
    website_url = db.Column(db.String(length=500))
    facebook_url = db.Column(db.String(length=500))
    instagram_url = db.Column(db.String(length=500))
    wifi_available = db.Column(db.Boolean(), default=0)
    toilet_available = db.Column(db.Boolean(), default=0)
    power_slots_available = db.Column(db.Boolean(), default=0)
    alcohol_available = db.Column(db.Boolean(), default=0)
    vegan_alternatives_available = db.Column(db.Boolean(), default=0)
    laptops_allowed = db.Column(db.Boolean(), default=0)
    open_for_takeaway = db.Column(db.Boolean(), default=0)
    open_for_delivery = db.Column(db.Boolean(), default=0)
    price_espresso = db.Column(db.Numeric(4, 2))
    price_filter_coffee = db.Column(db.Numeric(4, 2))
    price_cappuccino = db.Column(db.Numeric(4, 2))
    wifi_network_name = db.Column(db.String(length=255))
    wifi_network_password = db.Column(db.String(length=255))
    food_options = db.Column(db.String(length=255))
    picture_urls = db.Column(db.Text)
    posts = db.relationship('Post', backref='post', lazy=True)
    reviews = db.relationship('Review', backref='review', lazy=True)
    opening_hours = db.relationship(
        'OpeningHours', backref='opening-hours', lazy=True)
    users = db.relationship('User', secondary="placestoenduser")


class OpeningHours(db.Model):
    opening_id = db.Column(db.Integer(), primary_key=True)
    place_id = db.Column(db.Integer(), db.ForeignKey('places.id'))
    week_day = db.Column(db.Integer())
    opens_at = db.Column(db.DateTime())
    closes_at = db.Column(db.DateTime())


class Post(db.Model):
    __tablename__ = 'posts'
    id = db.Column(db.Integer(), primary_key=True)
    place_id = db.Column(db.Integer(), db.ForeignKey('places.id'))
    user_id = db.Column(db.Integer(), db.ForeignKey('users.id'))
    post_date = db.Column(db.Date)
    post_text = db.Column(db.Text, nullable=False)
    poast_image_url = db.Column(db.Text)


class Review(db.Model):
    __tablename__ = 'reviews'
    id = db.Column(db.Integer(), primary_key=True)
    place_id = db.Column(db.Integer(), db.ForeignKey('places.id'))
    user_id = db.Column(db.Integer(), db.ForeignKey('users.id'))
    stars_number = db.Column(db.Integer())
    text = db.Column(db.Text, nullable=False)
    image_url = db.Column(db.Text)
    review_date = db.Column(db.Date)
    helpful_questions = db.Column(db.Boolean())


if __name__ == '__main__':
    manager.run()
