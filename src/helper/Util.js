import {AppColors} from "@theme";

export const getType = (code) => {

  let result = '';

  switch(code) {
    case 'O':
        result = 'Operating';
        break;

    case 'G':
        result = 'Genenal';
        break;

    case 'C':
        result = 'Capital';
        break;

    default:
        result = 'N/A';
  }

  return result;
}

export const getPriorityColorByCode = (code) => {

  let colorCode = null;

  switch(code) {
    case "0-IMM":
        colorCode = AppColors.red
        break;
    case "1-HIGH":
        colorCode = AppColors.workOrderStatus.high
        break;
    case "2-MED":
        colorCode = AppColors.workOrderStatus.medium
        break;

    case "3-LOW":
        colorCode = AppColors.workOrderStatus.low
        break;

    case "V.URGENT":
        colorCode = AppColors.workOrderStatus.high
        break;

    case "V-LOW":
        colorCode = AppColors.workOrderStatus.low
        break;

    default:
        colorCode = AppColors.gray;
  }

  return colorCode;
}

export const getPriorityStringByCode = (code) => {

  let result = '';

  switch(code) {
    case "0-IMM":
        result = 'Immediate Priority'
        break;
    case "1-HIGH":
        result = 'High Priority'
        break;
    case "2-MED":
        result = 'Medium Priority'
        break;

    case "3-LOW":
        result = 'Low Priority'
        break;

    case "V.URGENT":
        result = 'Very urgent Priority'
        break;

    case "V-LOW":
        result = 'Ver low Priority'
        break;

    default:
        result = '';
  }

  return result;
}
