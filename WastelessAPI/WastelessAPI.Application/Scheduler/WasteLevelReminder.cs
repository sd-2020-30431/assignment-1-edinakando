using Coravel.Invocable;
using System;
using System.Threading.Tasks;

namespace WastelessAPI.Application.Scheduler
{
    public class WasteLevelReminder : IInvocable
    {
        public Task Invoke()
        {
            Console.WriteLine("check " + DateTime.Now.ToString());
            return Task.CompletedTask;
        }
    }
}
