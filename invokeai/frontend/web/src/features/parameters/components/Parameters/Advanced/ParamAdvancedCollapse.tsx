import { Divider, Flex } from '@chakra-ui/react';
import { createSelector } from '@reduxjs/toolkit';
import { RootState, stateSelector } from 'app/store/store';
import { useAppSelector } from 'app/store/storeHooks';
import { defaultSelectorOptions } from 'app/store/util/defaultMemoizeOptions';
import IAICollapse from 'common/components/IAICollapse';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { ParamCpuNoiseToggle } from 'features/parameters/components/Parameters/Noise/ParamCpuNoise';
import ParamSeamless from 'features/parameters/components/Parameters/Seamless/ParamSeamless';
import ParamClipSkip from './ParamClipSkip';
import ParamCFGRescaleMultiplier from './ParamCFGRescaleMultiplier';

const selector = createSelector(
  stateSelector,
  (state: RootState) => {
    const {
      clipSkip,
      model,
      seamlessXAxis,
      seamlessYAxis,
      shouldUseCpuNoise,
      cfgRescaleMultiplier,
    } = state.generation;

    return {
      clipSkip,
      model,
      seamlessXAxis,
      seamlessYAxis,
      shouldUseCpuNoise,
      cfgRescaleMultiplier,
    };
  },
  defaultSelectorOptions
);

export default function ParamAdvancedCollapse() {
  const {
    clipSkip,
    model,
    seamlessXAxis,
    seamlessYAxis,
    shouldUseCpuNoise,
    cfgRescaleMultiplier,
  } = useAppSelector(selector);
  const { t } = useTranslation();
  const activeLabel = useMemo(() => {
    const activeLabel: string[] = [];

    if (!shouldUseCpuNoise) {
      activeLabel.push(t('parameters.gpuNoise'));
    }

    if (clipSkip > 0 && model && model.base_model !== 'sdxl') {
      activeLabel.push(
        t('parameters.clipSkipWithLayerCount', { layerCount: clipSkip })
      );
    }

    if (seamlessXAxis && seamlessYAxis) {
      activeLabel.push(t('parameters.seamlessX&Y'));
    } else if (seamlessXAxis) {
      activeLabel.push(t('parameters.seamlessX'));
    } else if (seamlessYAxis) {
      activeLabel.push(t('parameters.seamlessY'));
    }

    if (cfgRescaleMultiplier) {
      activeLabel.push(t('parameters.cfgRescale'));
    }

    return activeLabel.join(', ');
  }, [
    cfgRescaleMultiplier,
    clipSkip,
    model,
    seamlessXAxis,
    seamlessYAxis,
    shouldUseCpuNoise,
    t,
  ]);

  return (
    <IAICollapse label={t('common.advanced')} activeLabel={activeLabel}>
      <Flex sx={{ flexDir: 'column', gap: 2 }}>
        <ParamSeamless />
        <Divider />
        {model && model?.base_model !== 'sdxl' && (
          <>
            <ParamClipSkip />
            <Divider pt={2} />
          </>
        )}
        <ParamCpuNoiseToggle />
        <Divider />
        <ParamCFGRescaleMultiplier />
      </Flex>
    </IAICollapse>
  );
}
