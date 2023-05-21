import { useEffect } from 'react';

const useTitle = title => {
    useEffect(() => {
        document.title = "Whisk & Play | " + title;
    }, [title])
}

export default useTitle;