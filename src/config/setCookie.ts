const setCookie = (name: string, key: string, expires: number) => {
  const date = new Date();
  date.setTime(date.getTime() + expires);

  document.cookie =
    name + "=" + (key || "") + ";expires=" + date.toUTCString() + ";path=/";
};

export default setCookie;
