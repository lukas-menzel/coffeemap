import os
import flask
import flask_sqlalchemy
import flask_praetorian
import flask_cors
from flask_migrate import Migrate


# Initialize flask app for the example
app = flask.Flask(__name__, static_folder='../build', static_url_path=None)
app.debug = True
app.config['SECRET_KEY'] = '254wsztdrhfjcghvkjlkio8i7ttgh'
app.config['JWT_ACCESS_LIFESPAN'] = {'hours': 24}
app.config['JWT_REFRESH_LIFESPAN'] = {'days': 30}

db = flask_sqlalchemy.SQLAlchemy()
guard = flask_praetorian.Praetorian()
cors = flask_cors.CORS()
migrate = Migrate(app, db)


# Initialize a local database for the example
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:n&6e-oca@localhost/db01'
db.init_app(app)
from api import routes
from .models import User
# Initialize the flask-praetorian instance for the app
guard.init_app(app, User)

# Initializes CORS so that the api_tool can talk to the example app
cors.init_app(app)

# Run the example
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
