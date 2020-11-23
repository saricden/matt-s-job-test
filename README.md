# Kirk's Job Test

Hello and welcome to my job test! Thank you so much for this oppurtunity, I've done my absolute best to get this done well but in a timely fashion.


## Installation

1) Clone the repository and `cd` into it:

`git clone git@github.com:saricden/matt-s-job-test.git`

`cd matt-s-job-test`

2) Install the Composer and NPM dependencies:

`composer install`

`npm install`

3) Build the JavaScript frontend:

`npm run prod`

4) Move the `.env.example` file to `.env`:

`mv .env.example .env`

5) Create a MySQL database named `jobtest` on localhost, and make a username / password combo with full privileges, then fill in the details in `.env`:

```
...
DB_DATABASE=jobtest
DB_USERNAME=yourusename
DB_PASSWORD=yourpassword
...
```

6) Migrate the database structure:

`php artisan migrate`

7) Seed the database:

`php artisan db:seed`

8) Generate a key:

`php artisan key:generate`

9) Run the server:

`php artisan serve`


## Features

I've implemented the required features, along with a few extras! There is a minimalist API for reading data from the database, a frontend to display the gallery, along with:

- A responsive UI such that the app could be used on a tablet or smartphone.
- A couple extra views to display photographers and the albums posted under their profiles.
- A breadcrumb navbar to go back to previous views.
- A dark mode toggle (which saves to `localStorage`).


## Details

### My Process

My development process entailed first setting up a Laravel development environment, then implementing React for the UI. I built out the frontend of the gallery (initially connecting it simply to the JSON file provided). After that was in place I moved on to creating migrations to define the database structure and a seeder to import the data from the JSON file into the newly structured database. At this point I began to write out code for the API (testing it via Postman), and shortly after this I refactored the frontend to consume the API instead of the JSON file.

### Tools I Used

I used the following tools:

- Laravel (of course)
- React (for the frontend SPA)
- react-router-dom for frontend routing
- react-switch for a stylistic switch element
- react-image-lightbox for a zoom-enabled image modal that worked on mobile and desktop
- FontAwesome for SVG icons

I consider these tools important for my development mainly because they save time and prevent me from "re-inventing the wheel." While some are more important than others (it would have been fairly trivial to introduce my own switch element for example), the time saved by leveraging existing code enabled me to focus on the logic unique to this application as opposed to getting bogged down in boilerplate.

### What Was Hard

The part I considered the most tricky was probably getting the hang of MVC again (it's been a hot minute since I've setup my own backend). While I enjoy serverside coding, in my own projects I usually leverage BaaS such as Firebase and focus my attention on the UI/UX code. That being said I loved the challenge!

I will note that I'm not sure if I placed some of my API functions in the correct place. I feel as though some of the querying code which I placed in my controllers might have been better suited in the models. Curious to know what you think!

### What Was Easy

The frontend. While parts are always a challenge, in general the frontend is where I shine. I love developing interactive, visual code.


## Takeaway

This was an excellent test, which I think enabled me to show off both front and backend skills. While I did find the frontend easier, I would like to be clear that I am still applying for the full stack position. Not only do I want to brush up on my rusty backend skills, I want to become a fully balanced web developer.

All the best, Kirk.