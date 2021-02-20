const keyframes = ({ customPositionX = 0, customTranslateY = 0 }) => ({
    slideDown:  {
        from: {
            transform: `translateY(-${customTranslateY}%)`,
        },
        to:   {
            transform: `translateY(0%)`,
        },
    },
    waves:      {
        from: {
            backgroundPositionX: `-${customPositionX}rem`,
        },
        to:   {
            backgroundPositionX: `${customPositionX}rem`,
        },
    },
    multiWaves: {
        '0%':   {
            backgroundPosition: `0 50%`,
        },
        '50%':  {
            backgroundPosition: `100% 50%`,
        },
        '100%': {
            backgroundPosition: `0% 50%`,
        },
    },
});

export default {
    smoothFade:             ($isShown = false, hasMenuEffect = true) => ({
        opacity:        $isShown ? 1 : 0,
        transform:      $isShown ? 'translate(0px,0px)' : 'translate(0px,10px)',
        zIndex:         $isShown ? '1' : '-10',
        transition:     hasMenuEffect ? 'all 0.5s ease-out' : '',
        animationDelay: hasMenuEffect ? '0.5s' : '',
    }),
    smoothFadeFast:         ($isShown = false, hasMenuEffect = true) => ({
        opacity:        $isShown ? 1 : 0,
        transform:      $isShown ? 'translate(0px,0px)' : 'translate(0px,10px)',
        zIndex:         $isShown ? '1' : '-10',
        transition:     hasMenuEffect ? 'all 0.1s ease-out' : '',
        animationDelay: hasMenuEffect ? '0.1s' : '',
    }),
    slideDownWaterfall:     ($visible) => ({
        transform:         $visible ? '' : 'translateY(-150%)',
        transition:        $visible ? 'all 850ms cubic-bezier(0.19, 1, 0.22, 1)' : '',
        zIndex:            '999',
        animationDuration: '0.3s',
        animationName:     $visible ? keyframes({ customTranslateY: 150 }).slideDown : '',
    }),
    slideDownWaterfallSlow: ($visible) => ({
        transform:         $visible ? '' : 'translateY(-150%)',
        transition:        $visible ? 'all 850ms cubic-bezier(0.19, 1, 0.22, 1)' : '',
        zIndex:            '999',
        animationDuration: '0.7s',
        animationName:     $visible ? keyframes({ customTranslateY: 150 }).slideDown : '',
    }),
    waves:                  ({ positionX }) => ({
        animationDuration:       '0.9s',
        backgroundPositionX:     `-${positionX}rem`,
        transition:              'all 850ms cubic-bezier(0.19, 1, 0.22, 1)',
        animationName:           keyframes({ customPositionX: positionX }).waves,
        animationIterationCount: 'infinite',
        animationTimingFunction: 'ease',
    }),
    multiWaves:             () => ({
        animationDuration:       '2.3s',
        backgroundSize:          '155%',
        transition:              'all 850ms cubic-bezier(0.19, 1, 0.22, 1)',
        animationName:           keyframes({ customPositionX: 0 }).multiWaves,
        animationIterationCount: 'infinite',
        animationTimingFunction: 'ease',
    }),
};
