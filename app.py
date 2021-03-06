import os
import flask
import flask_sqlalchemy
import flask_praetorian
import flask_cors
from flask_migrate import Migrate


# Initialize flask app
app = flask.Flask(__name__, static_folder='./build', static_url_path='/')
app.debug = True
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY')
app.config['JWT_ACCESS_LIFESPAN'] = {'hours': 24}
app.config['JWT_REFRESH_LIFESPAN'] = {'days': 30}
db = flask_sqlalchemy.SQLAlchemy(app)
guard = flask_praetorian.Praetorian()
cors = flask_cors.CORS()
migrate = Migrate(app, db)


# Initialize a database
if os.environ.get('DATABASE_URL'):
  app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL').replace("://", "ql://", 1)
else:
    app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URI')
db.init_app(app)

from models import User
from routes import MyJSONEncoder
# Initialize the flask-praetorian instance
guard.init_app(app, User)
app.json_encoder = MyJSONEncoder


cors.init_app(app)

if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=False, port=os.environ.get('PORT', 80))
