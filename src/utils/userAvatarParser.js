export const userAvatar = (data) => {
  if (data?.img_profile) {
    return data.img_profile;
  } else if (data) {
    const initialsName = [
      data.name.split(" ")[0][0],
      data.name.split(" ").at(-1)[0],
    ];

    return `https://ui-avatars.com/api/?name=${initialsName[0]}+${initialsName[1]}&format=svg&background=97FFA8`;
  }

  return `https://ui-avatars.com/api/?name=Ramilthon&format=svg&background=97FFA8`;
};
