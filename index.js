const colors = {
  bg: '#172030',
  fg: '#b8bcc6',
  black: '#374E73',
  red: '#c6797e',
  green: '#ADB9A4',
  yellow: '#ece7ac',
  blue: '#6e94b9',
  magenta: '#b18bb1',
  cyan: '#8ab6c1',
  white: '#e3e4e8',
  lightBlack: '#3F5A85',
  lightRed: '#d19498',
  lightGreen: '#bec8b7',
  lightYellow: '#F2EFC7',
  lightBlue: '#98b3cd',
  lightMagenta: '#ccb3cc',
  lightCyan: '#abcbd3',
  lightWhite: '#FFFFFF',
}

exports.decorateConfig = config => {
  config.backgroundColor = colors.bg
  config.foregroundColor = colors.fg
  config.cursorShape = 'BLOCK'
  config.cursorBlink = true
  config.colors = colors

  config.cursorColor = colors.red
  config.padding = '12px 14px'

  config.termCSS = `
    ${config.termCSS || ''}
  `

  config.css = `
    .line { 
      color: ${colors.fg};
      background: rbga(23,32,48, 0.8);
    }
    ${config.css || ''}
  `

  return { ...config }
}
