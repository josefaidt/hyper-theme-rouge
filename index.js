const colors = {
  main: {
    bg: '#172030',
    fg: '#b8bcc6',
    highlight: '#91d1bd10',
  },
  ansi: {
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
  },
}

exports.decorateConfig = config => {
  return Object.assign({}, config, {
    backgroundColor: colors.main.bg,
    foregroundColor: colors.main.fg,
    cursorShape: 'BLOCK',
    cursorBlink: true,
    colors: colors.ansi,
    cursorColor: colors.ansi.red,
    selectionColor: colors.main.highlight,
    // borderColor: colors.ansi.red,
    cursorAccentColor: colors.main.bg,
    padding: '0.2rem 0.8rem',
    termCSS: `${config.termCSS || ''}`,
    css: `
      ${config.css || ''}
      .line {
        color: ${colors.fg};
        background: rbga(23,32,48, 0.8);
      }
    `,
  })
}
