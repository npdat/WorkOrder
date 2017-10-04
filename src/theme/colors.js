/**
 * App Theme - Colors
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */

const app = {
  background: '#D3D3D3',
  cardBackground: '#FFFFFF',
  listItemBackground: '#EBEAEB',
  borderListView: '#E8E8E8'
};

const brand = {
  brand: {
    primary: '#6E6E6E',
    secondary: '#17233D',
  },
};

const text = {
  textPrimary: '#525252',
  textSecondary: '#777777',
  headingPrimary: brand.brand.primary,
  headingSecondary: brand.brand.primary,
};

const workOrder = {
  workOrderStatus: {
    high: '#F4643C',
    medium: '#FF9200',
    low: '#37D179'
  }
}

const commonColor = {
  red: '#CF000F',
  orange: '#FF9200',
  gray: '#797979',
  lightGray: '#CBCBCB',
  darkGray: '#424242',
  cyan: '#02AAD6',
  white: '#FFFFFF'
}

const borders = {
  border: '#D0D1D5',
};

const tabbar = {
  tabbar: {
    background: '#ffffff',
    iconDefault: '#BABDC2',
    iconSelected: brand.brand.primary,
  },
};

const navbar = {
  navbar: {
    primary: '#0E4EF8',
  }
}

const header= {
  header: {
    backgroundColor: 'white',
    height: 80,
    borderBottomColor: '#E3E3E3',
    borderBottomWidth: 1
  },
  color: '#B5B5B5',
  headerSml: {
    color: '#B5B5B5',
  }
}

const textColor = {
  colorLevel1: '#383838',
  colorLevel2: '#7C7C7C',
  colorLevel3: '#B0B0B0',
}

const iconColor = {
  brown: '#AAAAAA',
}

export default {
  ...app,
  ...brand,
  ...text,
  ...borders,
  ...tabbar,
  ...commonColor,
  ...workOrder,
  ...navbar,
  ...header,
  ...textColor,
  ...iconColor,
};
