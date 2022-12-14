import { useEffect, useState } from 'react';

const useTeacher = email => {
    console.log("from use teacher",email);
    const [isTeacher, setIsTeacher] = useState(false);
    const [isTeacherLoading, setIsTeacherLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`https://abacus-academy-server-swart.vercel.app/users/teacher/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setIsTeacher(data.isTeacher);
                    setIsTeacherLoading(false);
                });
        }
    }, [email]);

    return [isTeacher, isTeacherLoading];
};

export default useTeacher;