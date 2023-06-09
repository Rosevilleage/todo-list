import styled from "styled-components";
import CalendarHead from "../component/calendar/CalendarHead";
import CalendarDays from "../component/calendar/CalendarDays";
import CalenderBoard from "../component/calendar/CalendarBoard";
import CalendarModal from "../component/CalendarModal";
import { useSelector } from "react-redux";

const Container = styled.div`
  position: relative;
  height: 100%;
  flex-basis: 80%;
  border-radius: 10px 0 0 10px;
  background-color: rgb(179, 192, 192);
  background-size: cover;
  padding: 20px;
`;

function Calendar() {
  const isModlaOpen = useSelector((state) => state.modal.value);
  return (
    <>
      <Container>
        <CalendarHead />
        <CalendarDays />
        <CalenderBoard />
        {isModlaOpen && <CalendarModal />}
      </Container>
    </>
  );
}

export default Calendar;
