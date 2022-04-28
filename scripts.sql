
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
);

create table bookings(
bookingid int IDENTITY(1,1) primary key,
hotelid int, 
userid int,
startDdate date,
endDate date,
amount float,
FOREIGN KEY (userid) REFERENCES users(userid),
FOREIGN KEY (hotelid) REFERENCES hotels(hotelid)
);
