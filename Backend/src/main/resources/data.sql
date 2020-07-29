
insert into "admin" ("id","email","name") values (1,'adrian@yhoo.com','Adrian');
insert into "admin" ("id","email","name") values (2,'emil@yhoo.com','Emil');

insert into "exam" ("id",academicyear,"date",seats,semester,subject,yearofstudy) values (1,2018,'2018-06-14',100,1,'Chimie',2);
insert into "exam" ("id",academicyear,"date",seats,semester,subject,yearofstudy) values (2,2018,'2018-05-13',200,1,'Fizica',3);
insert into "exam" ("id",academicyear,"date",seats,semester,subject,yearofstudy) values (3,2019,'2019-04-12',150,2,'FIMR',2);
insert into "exam" ("id",academicyear,"date",seats,semester,subject,yearofstudy) values (4,2018,'2018-03-11',160,1,'FIE',3);
insert into "exam" ("id",academicyear,"date",seats,semester,subject,yearofstudy) values (5,2018,'2018-02-10',220,2,'FIETC',1);
insert into "exam" ("id",academicyear,"date",seats,semester,subject,yearofstudy) values (6,2019,'2019-01-15',190,2,'Fizica',2);

insert into "students" ("id","email","name",yearofstudy) values (1,'dorin@yahoo.com','Dorin',2);
insert into "students" ("id","email","name",yearofstudy) values (2,'emil@yahoo.com','Emil',2);

insert into "teacher" ("id","email","nume") values (1,'greconici@yahoo.com','Greconici');
insert into "teacher" ("id","email","nume") values (2,'pop@yahoo.com','Pop');
insert into "teacher" ("id","email","nume") values (3,'zaharie@yahoo.com','Zaharie');


insert into "planning" ("id",exam_id,prof_id,student_id) values (1,1,1,1);
insert into "planning" ("id",exam_id,prof_id,student_id) values (2,6,1,1);
insert into "planning" ("id",exam_id,prof_id,student_id) values (3,2,3,2);
insert into "planning" ("id",exam_id,prof_id,student_id) values (4,4,1,2);
insert into "planning" ("id",exam_id,prof_id,student_id) values (5,5,1,1);







