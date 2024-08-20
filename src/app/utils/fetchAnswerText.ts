export const fetchAnswerText = (answer: string) => {
  switch (answer) {
    case 'E1V1M5':
      return '最初目が閉じている状態: 揺らしても目が開かない';
    case 'E2V2M6':
      return '最初目が閉じている状態: 変なことを言う';
    case 'E2V3M6':
      return '最初目が閉じている状態: 名前しか言わない';
    case 'E2V4M6':
      return '最初目が閉じている状態: しっかり答える';
    case 'E4V2M6':
      return '最初目が開いている状態: 変なことを言う';
    case 'E4V3M6':
      return '最初目が開いている状態: 名前しか言わない';
    case 'E4V4M6':
      return '最初目が開いている状態: しっかり答える';
    case 'E3V2M6':
      return '問いかけたら目が開いた状態: 変なことを言う';
    case 'E3V3M6':
      return '問いかけたら目が開いた状態: 名前しか言わない';
    case 'E3V4M6':
      return '問いかけたら目が開いた状態: しっかり答える';
    case 'NO_ANSWER':
      return '手を握らない';
    default:
      return '回答が見つかりません';
  }
};
