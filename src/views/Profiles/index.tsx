import { Center } from "@src/components/Center";
import API from "@src/config/api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ProfileEditIcon,
  ProfileCard,
  ProfileGrid,
  ProfileRemoveIcon,
  ProfilesIconsDiv,
  AbsoluteDiv,
  ProfileNameProfileIcon,
} from "./styled";
import setCookie from "@src/config/setCookie";
import { AiOutlinePlus } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { MdOutlineDone } from "react-icons/md";
import { Input } from "./styled";
import { ErrorContent, ErrorDiv } from "@src/components/ErrorDiv";
import { IoMdClose } from "react-icons/io";

const Profiles = () => {
  const [profiles, setProfiles] = useState<string[]>();
  const [editMode, setEditMode] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const loadProfiles = async () => {
    const response: any = await API.get("/user/profiles")
      .then((value: any) => value.data)
      .catch((value: any) => value.response.data);

    if (response.success) {
      setProfiles(response.message);
    }
  };

  const addProfile = async () => {
    const profileName = document.getElementById(
      "profileNameInput",
    ) as HTMLInputElement;

    if (profileName) {
      const { value } = profileName;

      if (value) {
        if (value.length < 2 || value.length > 15) {
          setError("invalid name !!");
        } else {
          const response: any = await API.post("/user/profiles", {
            name: value,
          })
            .then((value: any) => value.data)
            .catch((value: any) => value.response.data);

          if (!response.success) {
            setError(response.message);
          } else {
            loadProfiles();
          }
        }
      }
    }

    const elem = document.getElementById("newProfile");
    if (elem) {
      elem.style.transform = "translateY(-200px)";
    }
  };

  const delProfile = async (key: number, profileName: string) => {
    if (key === undefined || key < 0 || key > 4) {
      setError("invalid profile !!");
    } else {
      if (
        confirm(`Are you sure you want to delete the ${profileName} profile?`)
      ) {
        const response: any = await API.delete("/user/profiles", {
          data: {
            idProfile: key,
          },
        })
          .then((value: any) => value.data)
          .catch((value: any) => value.response.data);

        if (!response.success) {
          setError(response.message);
        } else {
          loadProfiles();
        }
      }
    }
  };

  const updProfile = async (key: number) => {
    const name = prompt("New name?")?.toString();

    if (name) {
      if (
        name.length < 15 &&
        name.length > 2 &&
        key != undefined &&
        key < 5 &&
        key >= 0
      ) {
        const response: any = await API.patch("/user/profiles", {
          idProfile: key,
          name: name,
        })
          .then((value: any) => value.data)
          .catch((value: any) => value.response.data);

        if (response.success) {
          loadProfiles();
        } else {
          setError(response.message);
        }
      } else {
        setError("invalid name");
      }
    }
  };

  const profileClickHandle = (key: number) => {
    if (!editMode) {
      setCookie("idProfile", key.toString(), 7 * 24 * 60 * 60 * 1000);
      navigate("/browser");
    }
  };

  useEffect(() => {
    loadProfiles();
  }, []);

  return (
    <>
      <ErrorDiv>
        {error && (
          <div style={{ position: "fixed" }}>
            <ErrorContent>
              <div></div>
              <p>{error}</p>
              <IoMdClose
                size={25}
                cursor="pointer"
                title="close"
                onClick={() => setError("")}
              />
            </ErrorContent>
          </div>
        )}
      </ErrorDiv>
      <AbsoluteDiv id="newProfile">
        <div>
          <Input
            id="profileNameInput"
            type="text"
            placeholder="profile name"
            minLength={2}
            maxLength={15}
          />
          <div>
            <ProfileNameProfileIcon title="done" onClick={addProfile} />
          </div>
        </div>
      </AbsoluteDiv>
      <Center>
        <div>
          <ProfileGrid>
            {profiles &&
              profiles.map(function (item: string, idx: number) {
                return (
                  <ProfileCard
                    key={idx}
                    onClick={() => {
                      profileClickHandle(idx);
                    }}
                  >
                    <div>
                      <p>{item}</p>
                      {editMode ? (
                        <>
                          <ProfileEditIcon
                            color="orange"
                            title="Add"
                            onClick={() => {
                              updProfile(idx);
                            }}
                          />
                          <ProfileRemoveIcon
                            color="orange"
                            title="Add"
                            onClick={() => {
                              delProfile(idx, item);
                            }}
                          />
                        </>
                      ) : (
                        <div></div>
                      )}
                    </div>
                  </ProfileCard>
                );
              })}
            <ProfilesIconsDiv>
              <Center>
                {editMode ? (
                  <>
                    <AiOutlinePlus
                      size={70}
                      color="orange"
                      title="Add"
                      cursor="pointer"
                      onClick={() => {
                        const elem = document.getElementById("newProfile");
                        if (elem) {
                          elem.style.transform = "translateY(0px)";
                        }
                      }}
                    />
                    <MdOutlineDone
                      size={70}
                      color="#21703f"
                      title="done"
                      cursor="pointer"
                      onClick={() => {
                        setEditMode(false);
                      }}
                    />
                  </>
                ) : (
                  <FiEdit
                    size={70}
                    color="#18d8c8"
                    title="Edit"
                    cursor="pointer"
                    onClick={() => {
                      setEditMode(true);
                    }}
                  />
                )}
              </Center>
            </ProfilesIconsDiv>
          </ProfileGrid>
        </div>
      </Center>
    </>
  );
};

export default Profiles;
