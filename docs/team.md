---
layout: page
title: 来认识下文档作者
description: 来自五湖四海各行各业的作者们
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamPageSection,
  VPTeamMembers
} from 'vitepress/theme'
import { core } from './_data/team'
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>来认识下文档贡献者</template>
    <template #lead>
      来自五湖四海各行各业的作者们
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers :members="core" />
</VPTeamPage>