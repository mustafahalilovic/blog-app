CREATE DATABASE blogapp;

-- uuid_generate_v4() extension
-- create extension if not exists "uuid-ossp";
CREATE TABLE users(
    id uuid PRIMARY KEY DEFAULT
    uuid_generate_v4(),
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    user_password VARCHAR(255) NOT NULL
);

CREATE TABLE blogs(
    id uuid PRIMARY KEY DEFAULT
    uuid_generate_v4(),
    user_id VARCHAR(255) NOT NULL,
    user_name VARCHAR(255) NOT NULL,
    question VARCHAR(255) NOT NULL,
    blog_text VARCHAR(255) NOT NULL,
    blog_date  VARCHAR(255) NOT NULL
);
-- reactions is table for upvotes and downvotes
CREATE TABLE reactions(
    id uuid PRIMARY KEY DEFAULT
    uuid_generate_v4(),
    blog_id VARCHAR(255) NOT NULL,
    user_id VARCHAR(255) NOT NULL,
    reaction_type VARCHAR(255) NOT NULL,
    purpose VARCHAR(255) NOT NULL
);

CREATE TABLE comments(
    id uuid PRIMARY KEY DEFAULT
    uuid_generate_v4(),
    blog_id VARCHAR(255) NOT NULL,
    comUsername VARCHAR(255) NOT NULL,
    comment VARCHAR(255) NOT NULL,
    upvotes INT NOT NULL,
    downvotes INT NOT NULL,
    comment_date VARCHAR(255) NOT NULL
);