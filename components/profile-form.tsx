"use client";

import { useProfileStore } from '@/store/profile';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Field, FieldGroup, FieldLabel } from './ui/field'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { useState } from 'react';

export default function ProfileForm() {
  const [name, setName] = useState("");

  const {fullName} = useProfileStore();


  return (
    <div className="p-8">
      <Card>
        <CardHeader>
          <CardTitle>
            Build your profile
          </CardTitle>
          <CardDescription>
            Complete the fields below to generate your custom GitHub README.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <FieldGroup className="grid max-w-sm grid-cols-2">
            <Field>
              <FieldLabel htmlFor="name">Name</FieldLabel>
              <Input id="name" placeholder="John Doe" onChange={(e) => setName(e.target.value)} value={name} />
            </Field>
            <Field>
              <FieldLabel htmlFor="last-name">Subtitle</FieldLabel>
              <Input id="last-name" placeholder="Lee" />
            </Field>
          </FieldGroup>
          <Input placeholder="John Doe" />

          <Input placeholder="Full Stack Developer" />

          <Textarea
            placeholder="Tell something about yourself..."
          />
        </CardContent>
      </Card>
    </div>
  )
}
