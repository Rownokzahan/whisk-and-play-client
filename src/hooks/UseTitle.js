import { useEffect } from 'react';

const useTitle = title => {
    useEffect(() => {
        document.title = title + " | Whisk & Play"
    }, [title])
}

export default useTitle;