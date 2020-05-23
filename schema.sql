use project2_db;
CREATE TABLE `User` (
`user_id` BIGINT (8) NOT NULL AUTO_INCREMENT,
`first_name` VARCHAR(30) NOT NULL,
`last_name` VARCHAR(30) NOT NULL,
'email' VARCHAR(30) NOT NULL,
`password` VARCHAR(30) NOT NULL, 
`age` VARCHAR(30) NOT NULL,
`friends_id` VARCHAR(30) NOT NULL,
'groups_id' VARCHAR(30) NOT NULL
PRIMARY KEY (`user_id`)
);
CREATE TABLE `runs` (
`runs_id` BIGINT(8) NOT NULL AUTO_INCREMENT,
`user_id` VARCHAR(255) NOT NULL,
`total_distance_id` VARCHAR(255) NOT NULL,
`total_time_id` VARCHAR(255) NOT NULL,
`location_id` VARCHAR(255) NOT NULL,
`run_date_id` DATE NOT NULL,
PRIMARY KEY (`runs_id`)
);
CREATE TABLE `groups` (
`groups_id` BIGINT(8) NOT NULL AUTO_INCREMENT,
`user_id` BIGINT NOT NULL,
`runs_id` BIGINT NOT NULL,
`group_name`  VARCHAR(255) NOT NULL,
`add_friend`  VARCHAR (255) NOT NULL,
`average_run_times`  VARCHAR (255) NOT NULL,
PRIMARY KEY (`groups_id`)
);



