import { BUTTON_HEIGHT } from "./values";

// 제일 가까운 item 값 찾아주기
export const getCenterPosition = offsetY => btnIndex = Math.round(offsetY / BUTTON_HEIGHT) * BUTTON_HEIGHT;
export const getCenterPositionFromIndex = index => index * BUTTON_HEIGHT;
export const getIndexFromOffset = offsetY => Math.round(offsetY / BUTTON_HEIGHT);

// 빈칸 만들어 주는 함수
export const fillEmpty = (visibleCount, [...values]) => {
  const fillCount = (visibleCount - 1) / 2;
  for (let i = 0; i < fillCount; i++) {
    values.unshift(" ");
    values.push("");
  }
  return values;
}

export const asPickerFormat = date => {
  const _date = new Date(date.getTime());
  const hour = _date.getHours();
  const min = _date.getMinutes();

  _date.setTime(Date.now());
  _date.setHours(hour);
  _date.setMinutes(min);

  return _date;
};