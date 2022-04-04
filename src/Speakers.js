import Header from "./Header";
import Menu from "./Menu";
import speakerData from "./SpeakerData";
import SpeakerDetail from "./SpeakerDetail";
import {
  useState,
  useEffect,
  useContext,
  useReducer,
  useCallback,
  useMemo,
} from "react";
import { ConfigContext } from "./App";
import speakerReducer from "./speakersReducer";

const Speakers = () => {
  const [speakingSaturday, setSpeakingSaturday] = useState(true);
  const [speakingSunday, setSpeakingSunday] = useState(true);

  // const [speakerList, setSpeakerList] = useState([]);

  const [speakerList, dispatch] = useReducer(speakerReducer, []);

  const [isLoading, setIsLoading] = useState(true);
  const context = useContext(ConfigContext);

  useEffect(() => {
    setIsLoading(true);

    new Promise((resolve) => {
      setTimeout(resolve, 1000);
    }).then(() => {
      // setSpeakerList(speakerData);
      dispatch({ type: "setSpeakerList", data: speakerData });
      setIsLoading(false);
    });
  }, []);

  const handleChangeSaturday = () => {
    setSpeakingSaturday(!speakingSaturday);
  };

  const handleChangeSunday = () => {
    setSpeakingSunday(!speakingSunday);
  };

  const heartFavoriteHandler = useCallback((e, favorite) => {
    const sessionId = parseInt(e.target.attributes["data-sessionid"].value);

    dispatch({
      type: favorite === true ? "favorite" : "unfavorite",
      sessionId,
    });
  }, []);

  const newSpeakerList = useMemo(
    () =>
      speakerList
        .filter(
          ({ sat, sun }) => (speakingSaturday && sat) || (speakingSunday && sun)
        )
        .sort((a, b) => {
          if (a.firstName < b.firstName) {
            return 1;
          }
          if (a.firstName > b.firstName) {
            return -1;
          }
          return 0;
        }),
    [speakingSaturday, speakingSunday, speakerList]
  );

  const speakerListFiltered = isLoading ? [] : newSpeakerList;

  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <div>
      <Header />
      <Menu />
      <div className="container">
        <div className="btn-toolbar  margintopbottom5 checkbox-bigger">
          {context.showSprakerSpeakingDays === false ? null : (
            <div className="hide">
              <div className="form-check-inline">
                <label className="form-check-label">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    onChange={handleChangeSaturday}
                    checked={speakingSaturday}
                  />
                  Saturday Speakers
                </label>
              </div>
              <div className="form-check-inline">
                <label className="form-check-label">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    onChange={handleChangeSunday}
                    checked={speakingSunday}
                  />
                  Sunday Speakers
                </label>
              </div>
            </div>
          )}
        </div>
        <div className="row">
          <div className="card-deck">
            {speakerListFiltered.map(
              ({ id, firstName, lastName, bio, favorite }) => {
                return (
                  <SpeakerDetail
                    key={id}
                    id={id}
                    favorite={favorite}
                    onHeartFavoriteHandler={heartFavoriteHandler}
                    firstName={firstName}
                    lastName={lastName}
                    bio={bio}
                  />
                );
              }
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Speakers;
