import { useEffect, useState } from 'react';

const useTeacher = email => {
    const [isTeacher, setIsTeacher] = useState(false);
    const [isTeacherLoading, setIsTeacherLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(``)
                .then(res => res.json())
                .then(data => {
                    setIsTeacher(data.isUser);
                    setIsTeacherLoading(false);
                });
        }
    }, [email]);

    return [isTeacher, isTeacherLoading];
};

export default useTeacher;