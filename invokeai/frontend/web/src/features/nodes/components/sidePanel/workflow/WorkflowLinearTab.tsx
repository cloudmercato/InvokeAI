import { Box, Flex } from '@chakra-ui/react';
import { createSelector } from '@reduxjs/toolkit';
import { stateSelector } from 'app/store/store';
import { useAppSelector } from 'app/store/storeHooks';
import { defaultSelectorOptions } from 'app/store/util/defaultMemoizeOptions';
import { IAINoContentFallback } from 'common/components/IAIImageFallback';
import { memo } from 'react';
import LinearViewField from 'features/nodes/components/flow/nodes/Invocation/fields/LinearViewField';
import ScrollableContent from 'features/nodes/components/sidePanel/ScrollableContent';
import { useTranslation } from 'react-i18next';

const selector = createSelector(
  stateSelector,
  ({ nodes }) => {
    return {
      fields: nodes.workflow.exposedFields,
    };
  },
  defaultSelectorOptions
);

const WorkflowLinearTab = () => {
  const { fields } = useAppSelector(selector);
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        position: 'relative',
        w: 'full',
        h: 'full',
      }}
    >
      <ScrollableContent>
        <Flex
          sx={{
            position: 'relative',
            flexDir: 'column',
            alignItems: 'flex-start',
            p: 1,
            gap: 2,
            h: 'full',
            w: 'full',
          }}
        >
          {fields.length ? (
            fields.map(({ nodeId, fieldName }) => (
              <LinearViewField
                key={`${nodeId}.${fieldName}`}
                nodeId={nodeId}
                fieldName={fieldName}
              />
            ))
          ) : (
            <IAINoContentFallback
              label={t('nodes.noFieldsLinearview')}
              icon={null}
            />
          )}
        </Flex>
      </ScrollableContent>
    </Box>
  );
};

export default memo(WorkflowLinearTab);
