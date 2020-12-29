export const FieldState = {
  REVEALED: 1,
  UNREVEALED: 2,
  FLAGGED: 4
};

export class Field {
  isMine = false;
  isBlownUp = false;
  state = FieldState.UNREVEALED;
  neighborCount = 0;
}