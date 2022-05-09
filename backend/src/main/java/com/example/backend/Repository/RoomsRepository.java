package com.example.backend.Repository;

import com.example.backend.Models.Rooms;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;

public interface RoomsRepository extends JpaRepository<Rooms, Integer> {

    @Query(value = " select c.hotelid, c.roomid, c.roomtypeid, c.roomprice, c.countpertype - case when c.booked is null then 0 else c.booked end as available from (\n" +
            "select r.*, b.booked from rooms r \n" +
            "left join (\n" +
            " select hotelid, roomtypeid\n" +
            " ,sum(numberofrooms)as booked from bookings where ?2 BETWEEN startDate and endDate or ?3 BETWEEN startDate and endDate\n" +
            " group by hotelid, roomtypeid) b on r.hotelid = b.hotelid and r.roomtypeid = b.roomtypeid\n" +
            ") c where hotelid = ?1", nativeQuery = true)
    List<Map<String, Object>> findAvailableRoomsByHotel(Integer hotelid, LocalDate start, LocalDate end);
}
