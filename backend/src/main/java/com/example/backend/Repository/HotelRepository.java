package com.example.backend.Repository;

import com.example.backend.ModelDTO.HotelDTO;
import com.example.backend.Models.Hotels;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;

public interface HotelRepository extends JpaRepository<Hotels, Integer> {
    List<Hotels> findByCity(String city);
    @Query(value = "select h.* from hotels h\n" +
            "join rooms r on h.hotelid = r.hotelid where r.roomid not in (\n" +
            "select roomid from bookings b where ?2 between b.startDate and b.endDate " +
            "and ?3 between b.startDate and b.endDate) and city = ?1 and active=1", nativeQuery = true)
    List<Map<String, Object>> findnewhotels(String city, LocalDate start, LocalDate end);

    @Query(value = "select h.* from hotels h\n" +
            "join rooms r on h.hotelid = r.hotelid where r.roomid not in (\n" +
            "select roomid from bookings b where ?1 between b.startDate and b.endDate " +
            "and ?2 between b.startDate and b.endDate) and active=1", nativeQuery = true)
    List<Map<String, Object>> findnewhotelsWithoutCity(LocalDate start, LocalDate end);

//    @Query(value = " select c.hotelid, c.roomid, c.roomtypeid, c.roomprice, c.countpertype - case when c.booked is null then 0 else c.booked end as available from (\n" +
//            "select r.*, b.booked from rooms r \n" +
//            "left join (\n" +
//            " select hotelid, roomtypeid\n" +
//            " ,sum(numberofrooms)as booked from bookings where ?2 BETWEEN startDate and endDate or ?3 BETWEEN startDate and endDate\n" +
//            " group by hotelid, roomtypeid) b on r.hotelid = b.hotelid and r.roomtypeid = b.roomtypeid\n" +
//            ") c where hotelid = ?1", nativeQuery = true)
//    List<Map<String, Object>> findAvailableRoomsByHotel(Integer hotelid, LocalDate start, LocalDate end);

    @Query(value = " select h.hotelid, hotelname, address, country, stars, city, [state] from (\n" +
            "select r.*, b.booked from rooms r \n" +
            "left join (\n" +
            " select hotelid, roomtypeid\n" +
            " ,sum(numberofrooms)as booked from bookings where ?2 BETWEEN startDate and endDate or ?3 BETWEEN startDate and endDate\n" +
            " group by hotelid, roomtypeid) b on r.hotelid = b.hotelid and r.roomtypeid = b.roomtypeid\n" +
            ") c\n" +
            "join hotels h on c.hotelid = h.hotelid where city = ?1 group by h.hotelid, hotelname, address, country, stars, city, [state]\n", nativeQuery = true)
    List<Map<String, Object>> findAvailableHotelsBycity(String city, LocalDate start, LocalDate end);

    @Query(value = " select h.hotelid, hotelname, address, country, stars, city, [state] from (\n" +
            "select r.*, b.booked from rooms r \n" +
            "left join (\n" +
            " select hotelid, roomtypeid\n" +
            " ,sum(numberofrooms)as booked from bookings where ?1 BETWEEN startDate and endDate or ?2 BETWEEN startDate and endDate\n" +
            " group by hotelid, roomtypeid) b on r.hotelid = b.hotelid and r.roomtypeid = b.roomtypeid\n" +
            ") c\n" +
            "join hotels h on c.hotelid = h.hotelid group by h.hotelid, hotelname, address, country, stars, city, [state]\n", nativeQuery = true)
    List<Map<String, Object>> findAvailableHotelsWithoutCity(LocalDate start, LocalDate end);
}
