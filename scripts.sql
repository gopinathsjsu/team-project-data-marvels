
create table roomtypes(
roomtypeid int IDENTITY(1,1) primary key, 
Type varchar(16),
multiplier decimal(4,2));

create table hotels(
hotelid int IDENTITY(1,1) primary key,
hotelname varchar(32),
address varchar(64),
city varchar(32),
state varchar(32),
country varchar(32),
stars decimal(4,2)
);

create table rooms(
roomid int IDENTITY(1,1) primary key,
hotelid int,
roomtypeid int,
roomprice float,
foreign key (hotelid) references hotels(hotelid),
foreign key (roomtypeid) references roomtypes(roomtypeid)
);

create table amenities(
id int IDENTITY(1,1) primary key,
amenity_name varchar(32),
cost decimal(4,2)
);

create table users(
userid int IDENTITY(1,1) primary key,
username varchar(32),
email varchar(32),
phone varchar(16),
rewards int,
pass varchar(64),
userrole varchar(16)
hotelid INT
FOREIGN KEY (hotelid) REFERENCES hotels(hotelid)
);

create table bookings(
bookingid int IDENTITY(1,1) primary key,
hotelid int, 
roomtypeid int,
roomid int,
userid int,
startDate date,
endDate date,
amount float,
paymenttype VARCHAR(16),
FOREIGN KEY (userid) REFERENCES users(userid),
FOREIGN KEY (hotelid) REFERENCES hotels(hotelid)
);

-- drop table bookings

-- insert into bookings VALUEs(1, 1, 2, )

insert into bookings values (1,1,6,1,'2021-08-21','2021-07-29',1000),
(2,2,7,1,'2021-01-21','2021-08-29',890),
(2,1,4,2,'2021-01-21','2021-01-25',1234),
(4,2,12,2,'2021-03-20','2021-01-28',5432),
(5,1,8,2,'2021-02-21','2021-03-21',10222)
