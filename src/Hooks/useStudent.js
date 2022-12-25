import { useEffect, useState } from "react";


const useStudent = email => {
    const [isStudent, setIsStudent] = useState(false);
    const [isStudentLoading, setIsStudentLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(``)
                .then(res => res.json())
                .then(data => {
                    setIsStudent(data.isUser);
                    setIsStudentLoading(false);
                });
        }
    }, [email]);

    return [isStudent, isStudentLoading];
};

export default useStudent;