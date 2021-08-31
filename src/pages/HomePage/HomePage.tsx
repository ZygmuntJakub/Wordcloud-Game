import { useEffect } from "react";

const HomePage = () => {
    useEffect(() => {
        fetch("/api/question")
            .then((res) => res.json())
            .then((data) => data)
            .catch((error) => error);
    }, []);

    return <div>Home Page</div>;
};

export default HomePage;
