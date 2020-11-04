import { User, GuildMember, Guild } from 'discord.js';
import { mock } from 'ts-mockito';
import { CommandContext } from '../src/commands/command';

export class Mock {
  static guild() {
    const guild = mock<Guild>();

    guild.id = '766351147115479040';
    guild.name = 'Test Server';

    return guild;
  }

  static member() {
    const member = mock<GuildMember>();
    
    member.guild = Mock.guild();
    member.user = Mock.user();

    return member;
  }

  static user() {
    const user = mock<User>();

    user.username = 'User';
    user.discriminator = '0001';
    user.id = '173557815326015488';

    return user;
  }
}
