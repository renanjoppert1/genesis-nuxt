<template>
  <div class="lg:tw-w-[450px] tw-pb-16 tw-px-12">
    <div class="card-wrapper tw-rounded-md tw-bg-zinc-900 tw-text-slate-800">
      <div class="image-wrapper">
        <img
          :src="props.thumbUrl"
          class="tw-w-full tw-h-[200px] tw-object-cover"
        />
      </div>
      <div class="tw-p-4">
        <div class="title tw-mt-5 tw-mb-2">
          <p class="tw-font-bold tw-text-base tw-text-genesis">
            {{ props.title }}
          </p>
        </div>
        <div class="author tw-mb-4 tw-flex tw-items-center tw-gap-4">
          <q-avatar text-color="white" size="30px">
            <img :src="props.authorAvatar" />
          </q-avatar>
          <p class="tw-text-sm tw-text-genesis">{{ props.author }}</p>
        </div>
        <div class="description">
          <p class="tw-text-white">
            {{ props.description }}
          </p>
        </div>
        <div
          class="divider tw-w-full tw-h-[1px] tw-bg-zinc-500 tw-bg-opacity-5 tw-my-4"
        ></div>
        <div class="tw-flex tw-gap-10">
          <div class="rating flex tw-text-genesis tw-text-[22px]">
            <div class="stars flex">
              <AppIcon name="mingcute:star-fill" />
              <AppIcon name="mingcute:star-fill" />
              <AppIcon name="mingcute:star-fill" />
              <AppIcon name="mingcute:star-half-fill" />
              <AppIcon name="mingcute:star-line" />
            </div>
            <p class="tw-text-sm">
              Nota de Avaliação: {{ props.ratingAverage }}
            </p>
          </div>
          <div class="totalEnrolled tw-flex tw-text-genesis">
            <AppIcon name="lucide:users" class="tw-mr-4 tw-text-[22px]" />
            {{ props.totalEnrolled }} Alunos Matriculados
          </div>
        </div>

        <q-btn
          color="primary"
          text-color="black"
          class="tw-my-4 row tw-mb-[10vh] lg:tw-mb-auto"
          to="/cursos/curso-teste"
          size="1.2em"
        >
          Ir Para este Curso
        </q-btn>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface CourseCardProps {
  title: string;
  author: string;
  authorAvatar?: string;
  totalHours: number;

  thumbUrl?: string;
  description?: string;
  totalEnrolled?: number;
  ratingAverage?: number;
}

const props = withDefaults(defineProps<CourseCardProps>(), {
  thumbUrl:
    "https://aescolagenesis.com.br/wp-content/uploads/2023/06/matt-botsford-bBNabN9R_ac-unsplash-1-300x225.jpg",
  authorAvatar:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  description:
    "Lorem ipsum dolor sit amet consectetur adipiscing elit vitae egestas semper lobortis litora, nulla urna dis quisque mauris at o...		",
  totalEnrolled: 0,
  ratingAverage: 0,
});
</script>



<style>
</style>
