export const commaThousondSeperator = (
    input: number | null | undefined,
    commo = ',',
    dot = '.'
  ): string => {
    const t = typeof input;
    if (t === null || t === undefined) return '-';
    let str = (input ?? '').toString();
    let arr = str.split('.');
    return (
      arr[0].replace(/\B(?=(\d{3})+(?!\d))/g, commo) + (arr.length === 2 ? `${dot}${arr[1]}` : '')
    );
  };
  