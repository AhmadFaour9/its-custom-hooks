# 📦 Custom Hooks Library for React
## 📝 Overview

Custom Hooks Library for React is a comprehensive collection of reusable React hooks designed to streamline common tasks in React applications. These hooks enhance development efficiency by providing straightforward, reusable solutions for everyday patterns and functionalities in React projects.
## 🚀 Features

    ## 🔄 useFetch Hook

    Simplifies data fetching with automatic state management for loading, error handling, and data storage.
   ##  📥 useGet Hook

    Performs HTTP GET requests and manages response data and errors.
   ##  📤 usePost Hook

    Handles HTTP POST requests and manages the request lifecycle.
    ## 🔄 usePut Hook

    Manages HTTP PUT requests for updating resources.
   ##  🗑️ useDelete Hook

    Easily performs HTTP DELETE requests to remove resources.
   ##  💾 useLocalStorage Hook

    Manages and persists state in the browser's localStorage with ease.
    ## 🔘 useToggle Hook

    Creates a simple toggle state with a single hook.

## 📦 Installation

To install the package, use npm or yarn:


npm install its-custom-hooks

or


yarn add its-custom-hooks

## 💻 Usage
## 📚 Example Usage

Here's an example of how you might use the useFetch hook in a React component:


import React from 'react';
import { useFetch } from 'its-custom-hooks';

const MyComponent = () => {
  const { data, loading, error } = useFetch('https://api.example.com/data');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return <div>{data && <pre>{JSON.stringify(data, null, 2)}</pre>}</div>;
};

export default MyComponent;

## 📖 Hook API

Each hook provides the following API:

    data: The data returned from the request or localStorage.
    error: Any error encountered during the request or operation.
    loading: A boolean indicating if the request or operation is in progress.

## 🛠️ Development

To contribute to the library, follow these steps:
## 🔧 Clone the Repository


git clone https://github.com/AhmadFaour9/its-custom-hooks.git
cd its-custom-hooks

## 📦 Install Dependencies


npm install

## 🧪 Run Tests


npm test

## 🛠️ Build the Library


npm run build

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details.
## 👤 Author

Eng. Ahmad Faour