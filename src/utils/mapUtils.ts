
export const openDirections = (lat: number, lng: number, name: string) => {
  const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&destination_place_id=${name}`;
  window.open(url, '_blank');
};
