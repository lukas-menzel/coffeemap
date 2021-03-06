"""empty message

Revision ID: 00dcb686bf4c
Revises: e2b9963303bb
Create Date: 2021-05-25 20:17:08.553171

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '00dcb686bf4c'
down_revision = 'e2b9963303bb'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_index(op.f('ix_users_password'), 'users', ['password'], unique=False)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_index(op.f('ix_users_password'), table_name='users')
    # ### end Alembic commands ###
