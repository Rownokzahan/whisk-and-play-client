import useTitle from "../hooks/UseTitle";

const Blog = () => {

    useTitle("Blog");

    return (
        <div className="space-y-8 mt-12 mb-24 text-dark-gray text-justify">
            <div>
                <h3 className="text-2xl font-semibold mb-2">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h3>
                <p className='text-gray-700'>
                    An access token is like a special code that a website or app gives you after a user log in successfully. It proves that user is a valid user and lets the user access certain things on the website or app. A refresh token is a code that helps user get a new access token when the old one expires, so user does not have to log in again every time.We should store them in httponly cookie cause localstorage is more easy to crack.
                </p>
            </div>

            <div>
                <h3 className="text-2xl font-semibold mb-2">Compare SQL and NoSQL databases?</h3>
                <p className='text-gray-700'>
                    SQL and NoSQL are different types of databases. SQL databases (like MySQL or PostgreSQL) use tables with fixed structures to store data and create relationships between them. NoSQL databases (like MongoDB or Cassandra) are more flexible and do not follow a strict table structure.
                </p>
            </div>

            <div>
                <h3 className="text-2xl font-semibold mb-2">What is express js? What is Nest JS?</h3>
                <p className='text-gray-700'>
                    Express.js is a framework for building web applications with Node.js. It simplifies the process by handling routing, middleware, and HTTP requests, allowing developers to focus on writing the application&apos;s logic.
                </p>
            </div>

            <div>
                <h3 className="text-2xl font-semibold mb-2">What is MongoDB aggregate and how does it work?</h3>
                <p className='text-gray-700'>
                    MongoDB aggregate is a powerful feature of the MongoDB database that allows you to perform advanced data aggregation operations. It provides a way to process and analyze data from multiple documents within a collection. Aggregation pipelines can be constructed using stages such as filtering, grouping, sorting, joining, and more. These stages are applied sequentially to transform and manipulate the data, providing flexible and efficient data processing capabilities.
                </p>
            </div>
        </div>
    );
};

export default Blog;