import { useEffect, useState } from "react";


const useStudent = email => {
    const [isStudent, setIsStudent] = useState(false);
    const [isStudentLoading, setIsStudentLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`https://abacus-academy-server-swart.vercel.app/users/student/${email}`)
                .then(res => res.json())
                .then(data => {
                    setIsStudent(data.isStudent);
                    setIsStudentLoading(false);
                });
        }
    }, [email]);

    return [isStudent, isStudentLoading];
};

export default useStudent;