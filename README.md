# Moovie

Moovie - Project to Provide Unbiased Ratings on Movies
Built with the following frameworks

1. React - Front-End
2. Django/REST API - Back-End

---

# Usage

### Clone repo

```bash
git clone https://github.com/coltonajackson/Moovie.git
```

### Create Python virtual environment and activate environment

```bash
python -m virtualenv env
.\\env\\scripts\\activate
```

### Install dependencies for Django 'backend'

```bash
pip install -r requirements.txt
```

### Install dependencies for React 'frontend'

```bash
cd frontend
npm install
```

### Run build for frontend

```bash
npm run build
```

### Change to root directory and collect staticfiles for Django app

```bash
cd ..
python manage.py collectstatic
```

### Run project from root with python manage.py runserver

```bash
python manage.py runserver
```

# Environment Variable Setup

### Create .env in the root project folder and enter the variables below

```
IMAGE_INLINE_SIZE_LIMIT = 0
```

---

View Live Demo on Heroku [here](https://moovie-01.herokuapp.com/).
