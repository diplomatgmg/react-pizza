./wait-for-it.sh database:5432 -- echo "Database is ready"

python manage.py migrate
python manage.py loaddata __fixtures__/ingredient.json
python manage.py loaddata __fixtures__/pizza.json
python manage.py loaddata __fixtures__/user.json

python manage.py runserver 0.0.0.0:8000
