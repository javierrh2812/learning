import { useReducer, FC } from "react";
import BookingForm from "../../components/BookingForm";
import { updateTimes, initializeTimes } from "../../utils/temp";

const Bookingpage: FC = (): JSX.Element => {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  return <BookingForm availableTimes={availableTimes} dispatch={dispatch} />;
};

export default Bookingpage;
