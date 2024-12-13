package com.example.backend.Repository;

import com.example.backend.Models.Bookings;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Map;

public interface BookingsRepository extends JpaRepository<Bookings, Integer> {

    /*select bookingid, userid, hotelname, address, start_date, end_date, numberofguests, numberofrooms, roomprice, paymenttype, status from bookings b
inner join hotels h on b.hotelid = h.hotelid
where userid = 3*/
    @Query(value = "select bookingid, roomtypeid, userid, hotelname, address, start_date, end_date, numberofguests, numberofrooms, roomprice, paymenttype, status from bookings b\n" +
            "inner join hotels h on b.hotelid = h.hotelid\n" +
            "where userid = ?1", nativeQuery = true)
    List<Map<String, Object>> findBookingsByUserid(Integer userid);
    List<Bookings> findByUserid(Integer userid);
    @Query(value = "select bookingid,roomtypeid, b.userid, u.username, hotelname, address, start_date, end_date, numberofguests, numberofrooms, roomprice, paymenttype, status from bookings b\n" +
            "inner join hotels h on b.hotelid = h.hotelid\n" +
            "inner join users u on u.userid = b.userid\n" +
            "where h.hotelid=?", nativeQuery = true)
    List<Map<String, Object>> findAllBookingsHotelid(Integer hotelid);

}
