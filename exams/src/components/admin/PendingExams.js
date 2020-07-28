import React, { useContext } from 'react'

//Import Exams Context
import { wExamsContext, ExamsContext } from '../ExamsContext';

//Import Exams Layout
import ExamLayout from '../layouts/ExamLayout';


import { v4 as uuidv4 } from 'uuid';

function PenddingExams() {
    const [wExams, setWExams] = useContext(wExamsContext);
    const [exams, setExams] = useContext(ExamsContext);

    const removeWExam = id => {
        setWExams(wExams.filter(wexam => wexam.id !== id))
    }
    console.log(wExams);
    return (
        <div className="container-fluid">
            <div className="row mt-5">
                <div className="col-12 text-center"><h1 className="title">Examene in Asteptare</h1></div>
            </div>
            <div className="row mt-5">
                {wExams.map((wexam, index) =>
                    // <div>
                    <ExamLayout materie={wexam.materie} profesor={wexam.profesor} data={wexam.data} status={wexam.status} key={index} isAdmin={false} isPend={true}
                        addExam={() => {
                            setExams(prevExams => [...prevExams, {
                                id: uuidv4(),
                                materie: wexam.materie,
                                data: wexam.data,
                                profesor: wexam.profesor,
                                status: 'acceptat'
                            }])
                            removeWExam(wexam.id);
                            alert("Examenul a fost acceptat cu succes");
                        }
                        } deleteExam={() => removeWExam(wexam.id)} />

                )}
                {wExams.length === 0 &&
                    <div className="col-12 text-center">
                        <h3>Nu sunt examene in asteptare!</h3>
                    </div>
                }

            </div>
        </div>
    )
}

export default PenddingExams;