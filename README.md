[![Maintainability](https://api.codeclimate.com/v1/badges/bb7977ca1ad2520734fa/maintainability)](https://codeclimate.com/github/diplomatgmg/react-pizza/maintainability)
![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)
![GitHub top language](https://img.shields.io/github/languages/top/diplomatgmg/react-pizza)




![Preview](https://github.com/diplomatgmg/react-pizza/blob/main/preview.png?raw=true)

# [DEPLOY](https://react-pizza-chi-eight.vercel.app/) <span style="font-size: 14px">(Не работает без Docker)</span>


# Pet-проект по доставке пиццы


## Frontend:
 - React
   - React-redux
   - RTK-query
   - Redux-persist
 - TypeScript
 - SASS

## Backend:
  - Python
  - Django
    - Django REST
  - PostgreSQL
  - Docker

### Дополнительные библиотеки, <br> которые использовались для разработки:

- Frontend
    - react-router-dom
    - react-hook-form
    - react-loading-skeleton
    - lodash
    - clsx
    - eslint
- Backend
    - django-debug-toolbar
    - django-filter
    - djangorestframework-simplejwt

<br />

## Локальное развертывание
> 1. Установите Docker:
> ```console
> https://www.docker.com/products/docker-desktop/
> ```
> 
> 2. Разверните проект:
> ```console
> $ docker-compose up
> ```


## Доступные учетные записи:
> email: 
> > admin@gmail.com  
> >
> password: 
> > admin


## Endpoints:

* ### localhost:3000
> `/` - Главная страница  
> `register/` - Страница регистрации  
> `login/` - Страница авторизации


* ### localhost:8000
> `admin/` - Админ-панель  
> `api/pizzas/` - Список пицц  
> `api/categories/` - Список категорий  
> `api/register/` - Регистрация по jwt-токену  
> `api/login/` - Авторизация по jwt-токену  
> `api/logout/` - Выход по jwt-токену
 
