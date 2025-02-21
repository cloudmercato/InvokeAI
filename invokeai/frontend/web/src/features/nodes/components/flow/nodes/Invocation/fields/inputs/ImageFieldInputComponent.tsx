import { Flex, Text } from '@chakra-ui/react';
import { skipToken } from '@reduxjs/toolkit/dist/query';
import { useAppDispatch } from 'app/store/storeHooks';
import IAIDndImage from 'common/components/IAIDndImage';
import IAIDndImageIcon from 'common/components/IAIDndImageIcon';
import {
  TypesafeDraggableData,
  TypesafeDroppableData,
} from 'features/dnd/types';
import { fieldImageValueChanged } from 'features/nodes/store/nodesSlice';
import {
  ImageFieldInputInstance,
  ImageFieldInputTemplate,
} from 'features/nodes/types/field';
import { FieldComponentProps } from './types';
import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { FaUndo } from 'react-icons/fa';
import { useGetImageDTOQuery } from 'services/api/endpoints/images';
import { PostUploadAction } from 'services/api/types';

const ImageFieldInputComponent = (
  props: FieldComponentProps<ImageFieldInputInstance, ImageFieldInputTemplate>
) => {
  const { nodeId, field } = props;
  const dispatch = useAppDispatch();

  const { currentData: imageDTO } = useGetImageDTOQuery(
    field.value?.image_name ?? skipToken
  );

  const handleReset = useCallback(() => {
    dispatch(
      fieldImageValueChanged({
        nodeId,
        fieldName: field.name,
        value: undefined,
      })
    );
  }, [dispatch, field.name, nodeId]);

  const draggableData = useMemo<TypesafeDraggableData | undefined>(() => {
    if (imageDTO) {
      return {
        id: `node-${nodeId}-${field.name}`,
        payloadType: 'IMAGE_DTO',
        payload: { imageDTO },
      };
    }
  }, [field.name, imageDTO, nodeId]);

  const droppableData = useMemo<TypesafeDroppableData | undefined>(
    () => ({
      id: `node-${nodeId}-${field.name}`,
      actionType: 'SET_NODES_IMAGE',
      context: { nodeId, fieldName: field.name },
    }),
    [field.name, nodeId]
  );

  const postUploadAction = useMemo<PostUploadAction>(
    () => ({
      type: 'SET_NODES_IMAGE',
      nodeId,
      fieldName: field.name,
    }),
    [nodeId, field.name]
  );

  return (
    <Flex
      className="nodrag"
      sx={{
        w: 'full',
        h: 'full',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <IAIDndImage
        imageDTO={imageDTO}
        droppableData={droppableData}
        draggableData={draggableData}
        postUploadAction={postUploadAction}
        useThumbailFallback
        uploadElement={<UploadElement />}
        dropLabel={<DropLabel />}
        minSize={8}
      >
        <IAIDndImageIcon
          onClick={handleReset}
          icon={imageDTO ? <FaUndo /> : undefined}
          tooltip="Reset Image"
        />
      </IAIDndImage>
    </Flex>
  );
};

export default memo(ImageFieldInputComponent);

const UploadElement = memo(() => {
  const { t } = useTranslation();
  return (
    <Text fontSize={16} fontWeight={600}>
      {t('gallery.dropOrUpload')}
    </Text>
  );
});

UploadElement.displayName = 'UploadElement';

const DropLabel = memo(() => {
  const { t } = useTranslation();
  return (
    <Text fontSize={16} fontWeight={600}>
      {t('gallery.drop')}
    </Text>
  );
});

DropLabel.displayName = 'DropLabel';
