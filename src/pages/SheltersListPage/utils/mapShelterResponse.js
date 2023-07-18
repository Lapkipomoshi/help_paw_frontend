const mapShelterResponse = (res) => {
  return {
    id: res.id,
    profileImage: res.profile_image,
    address: res.address,
    name: res.name,
    startHour: res.working_from_hour,
    finishHour: res.working_to_hour,
    webSite: res.web_site,
    logo: res.logo,
    warning: res.warning,
  };
};

export default mapShelterResponse;
