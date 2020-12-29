import { FieldState } from "./field.js";
import { Stage } from "./state.js";

export function render(state) {
  return `
    ${renderStage(state.stage)}
    ${renderTable(state.board)}
  `;
}

function renderStage(stage) {
  return `
    <span>
      ${
        stage === Stage.VICTORY 
          ? `😎` 
          : (stage === Stage.GAME_OVER ? `😭` : `🙂`)
      }
    </span>
  `;
}

function renderTable(board) {
  return `<table>${board.map(renderRow).join("")}</table>`; 
}

function renderRow(row) {
  return `<tr>${row.map(renderField).join("")}</tr>`;
}

function renderField(field) {
  if (field.state === FieldState.REVEALED) {
    return `
      <td>
        ${
          field.isMine 
            ? (field.isBlownUp ? `❌` : `💣`)
            : (field.neighborCount > 0 ? field.neighborCount : ``)
        }
      </td>
    `;
  } else {
    return `
      <td>
        <button>${field.state === FieldState.FLAGGED ? `🏳‍🌈` : ``}</button>
      </td>
    `;
  }
}