<template>
  <div class="w-full px-8">
    <UiCodeblock class="m-2">
      Add the attribute on-boarding of type Date on the model of Bordereau.<br>
    </UiCodeblock>
    <pre v-highlightjs>
      <code class="python">
from datetime import datetime
from typing import Optional

from inari_common.infrastructure.event_sourcing import EventStream
from melange.cqrs.domain import EventSourcedAggregateRoot, mutator

from apps.bordereaux.domain.enums import BordereauType
from apps.bordereaux.domain.events import (
    BordereauCreated,
    BordereauRolledBack,
    BordereauSetAsNil,
    BordereauUpdated,
)
from apps.common.typing import ID


class Bordereau(EventSourcedAggregateRoot):
    @mutator
    def on_created(self, event: BordereauCreated) -> None:
        self.id = event.id
        self.name = event.name
        self.type = BordereauType(event.type)
        self.is_combined = event.is_combined
        self.path = event.path
        self.uploaded = event.occurred_on
        self.reporting_start_date = event.reporting_start_date
        self.reporting_end_date = event.reporting_end_date
        self.nil = False
        self.rolled_back = False

        self.author_id = event.author_id
        self.binder_id = event.binder_id

    @staticmethod
    def create(
        id: ID,
        type: BordereauType,
        author_id: ID,
        name: Optional[str] = None,
        path: Optional[str] = None,
        reporting_start_date: Optional[datetime] = None,
        reporting_end_date: Optional[datetime] = None,
        binder_id: Optional[ID] = None,
        occurred_on: Optional[datetime] = None,
        is_combined: Optional[bool] = False,
    ) -> "Bordereau":
        event = BordereauCreated(
            id=id,
            name=name,
            path=path,
            type=str(type),
            is_combined=is_combined,
            author_id=author_id,
            occurred_on=occurred_on,
            reporting_start_date=reporting_start_date,
            reporting_end_date=reporting_end_date,
            binder_id=binder_id,
        )
        bordereau = Bordereau(EventStream([event], None))
        bordereau._changes.append(event)
        return bordereau

    @mutator
    def on_set_as_nil(self, event: BordereauSetAsNil) -> None:
        self.nil = True

    def set_as_nil(self) -> None:
        if not self.nil:
            self._apply(BordereauSetAsNil(self.id))

    @mutator
    def updated_reporting_dates(self, event: BordereauUpdated) -> None:
        if self.reporting_start_date is None and event.reporting_start_date is not None:
            self.reporting_start_date = event.reporting_start_date
        if self.reporting_end_date is None and event.reporting_end_date is not None:
            self.reporting_end_date = event.reporting_end_date

    def update_reporting_dates(
        self, start: Optional[datetime] = None, end: Optional[datetime] = None
    ) -> None:

        event = BordereauUpdated(self.id)
        if self.reporting_start_date is None and start is not None:
            event.reporting_start_date = start

        if self.reporting_end_date is None and end is not None:
            event.reporting_end_date = end

        if event.reporting_start_date or event.reporting_end_date:
            self._apply(event)

    @mutator
    def rolled_back(self, event: BordereauRolledBack) -> None:
        self.rolled_back = True

    def roll_back(self, author_id: ID) -> None:
        if not self.rolled_back:
            self._apply(BordereauRolledBack(self.id, author_id))
      </code>
    </pre>
    <textarea v-model="model" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your code here...">

    </textarea>

    <UiButton class="m-2" @click="onsubmit">
      Send
    </UiButton>

    <img v-if="resultImagePath" :src="resultImagePath" width="100" class="m-2"/>
    <span v-if="resultMessage" class="m-2">
      {{ resultMessage }}
    </span>
  </div>
</template>

<script>
import UiSection from '@/components/Ui/Section.vue'
import UiCard from '@/components/Ui/Card.vue'
import UiCodeblock from '@/components/Ui/Codeblock.vue'
import UiButton from '@/components/Ui/Button.vue'

import OkImage from '@/assets/images/OK.png'
import KoImage from '@/assets/images/KO.png'

export default {
  name: 'SaihokenPageContentSection',

  components: {
    UiSection,
    UiCard,
    UiCodeblock,
    UiButton
  },

  data() {
    return {
      resultImagePath: '',
      resultMessage: '',
      model: ""
    }
  },

  methods: {
    onsubmit() {
      if (this.model) {
        this.resultImagePath = OkImage
        this.resultMessage = "\
        Good job! You rock! \
This exercise is stimated in X minutes and you have spent X; so you won X horse-points\
        "
      } else {
        this.resultImagePath = KoImage
        this.resultMessage = "\
        Ops! Something is wrong! \
        Don't give up and try again"
      }
    }
  }

}
</script>