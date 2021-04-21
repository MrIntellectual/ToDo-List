//jshint esversion:6

exports.getDate  = () => {
  const today = new Date();
  return today.toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long"
  });
}

exports.getDay = () => {
  const today = new Date();
  return today.toLocaleDateString("en-US",{
    weekday:"long"
  });
}
